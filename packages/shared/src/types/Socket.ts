import { ScraperState, ScraperType } from "@shared/types";

export const SCRAPER_COMMAND_EVENT = {
  START_SCRAPER: "START_SCRAPER",
  STOP_SCRAPER: "STOP_SCRAPER",
  PAUSE_SCRAPER: "PAUSE_SCRAPER",
  RESTART_SCRAPER: "RESTART_SCRAPER",
} as const;
export type SCRAPER_COMMAND_EVENT =
  typeof SCRAPER_COMMAND_EVENT[keyof typeof SCRAPER_COMMAND_EVENT];

export const SCRAPER_CHANGE_EVENT = {
  STATE_CHANGE: "STATE_CHANGE",
} as const;
export type SCRAPER_CHANGE_EVENT =
  typeof SCRAPER_CHANGE_EVENT[keyof typeof SCRAPER_CHANGE_EVENT];

const SOCKET_EVENT = {
  ...SCRAPER_COMMAND_EVENT,
  ...SCRAPER_CHANGE_EVENT,
} as const;

type SOCKET_EVENT = typeof SOCKET_EVENT[keyof typeof SOCKET_EVENT];
export interface SocketMessage<E = SOCKET_EVENT, P = any> {
  event: E;
  payload: P;
}

export type ScraperCommandMessage = SocketMessage<
  SCRAPER_COMMAND_EVENT,
  ScraperType
>;

export type ScraperChangeStateMessage = SocketMessage<
  SCRAPER_CHANGE_EVENT,
  {
    type: ScraperType;
    state: ScraperState;
  }
>;

export function isScraperCommand(
  message: SocketMessage,
): message is ScraperCommandMessage {
  return Object.keys(SCRAPER_COMMAND_EVENT).includes(message.event);
}

export function isScraperStateChange(
  message: SocketMessage,
): message is ScraperChangeStateMessage {
  return message.event === SCRAPER_CHANGE_EVENT.STATE_CHANGE;
}
