import { OahrCli } from './OahrCli';
import * as irc from 'irc';
import { logIrcEvent } from "./models";
import { getIrcConfig } from "./config";
import log4js from "log4js";

log4js.configure("./config/log_cli.json");

const c = getIrcConfig();
let client = new irc.Client(c.server, c.nick, c.opt);

logIrcEvent(client);
let cli = new OahrCli(client);
cli.startApp(null);
