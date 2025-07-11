import {
  coreServices,
  createServiceFactory,
} from '@backstage/backend-plugin-api';
import { WinstonLogger } from '@backstage/backend-defaults/rootLogger';
import { createConfigSecretEnumerator } from '@backstage/backend-defaults/rootConfig';
import { transports, format } from 'winston';

const ignoreURLs = format((info, _) => {
  const ignoreUrls = [
    '/.backstage/health/v1/liveness',
    '/.backstage/health/v1/readiness',
  ];

  if (
    info?.service === 'rootHttpRouter' &&
    info?.type === 'incomingRequest' &&
    ignoreUrls.some(url => String(info?.url).includes(url))
  )
    return false;

  return info;
});

const loggerFormat =
  process.env.NODE_ENV === 'production'
    ? format.json
    : WinstonLogger.colorFormat;

export const loggerService = createServiceFactory({
  service: coreServices.rootLogger,
  deps: {
    config: coreServices.rootConfig,
  },

  async factory({ config }) {
    const logger = WinstonLogger.create({
      meta: {
        service: 'backstage',
      },
      level: process.env.LOG_LEVEL || 'info',
      transports: [new transports.Console()],
      format: format.combine(ignoreURLs(), loggerFormat()),
    });

    const secretEnumerator = await createConfigSecretEnumerator({ logger });
    logger.addRedactions(secretEnumerator(config));
    config.subscribe?.(() => logger.addRedactions(secretEnumerator(config)));

    return logger;
  },
});
