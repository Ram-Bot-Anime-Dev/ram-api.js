const { Logger } = require("@classycrafter/super-logger");
class ExecuteConsole {
  /**
   *
   * @param {String} name
   * @param {{ timezone,format,Logcustom,logDir}} _options
   */
  constructor(
    name,
    _options = {
      timezone: "America/New_York",
      format: 12,
      Logcustom: null,
      logDir: null,
    }
  ) {
    let logDir = _options.logDir;
    let timezone = _options.timezone;
    let format = _options.format;
    let Logcustom = _options.Logcustom;

    // if (!logDir) logDir = "./ram-api-logs";

    if (!timezone) timezone = "America/New_York";

    if (!Logcustom)
      Logcustom = {
        character: "*",
        gray: "#bbbbbb",
        namecolor: "#ff0000",
        processcolor: "#ff6400",
        titlecolor: "#00ff78",
        textcolor: "#00ff8f",
        datecolor: "#00a6ff",
      };

    let writeLogs = true;

    if (!logDir) writeLogs = false;

    let templog = new Logger({
      name,
      timezone,
      tzformat: format,
      dirpath: logDir,
      writeLogs: true,
      colored: true,
      custom: Logcustom,
    });
    this.log = templog;

    let logger = new Logger({
      name: `ram-api.js`,
      timezone,
      tzformat: format,
      dirpath: logDir,
      writeLogs: true,
      colored: true,
      custom: Logcustom,
    });
  }

  /**
   *
   * @param {String} msg
   */
  errorAsync(msg) {
    this.log.error(msg);
  }

  /**
   *
   * @param {String} msg
   */
  infoAsync(msg) {
    this.log.info(msg);
  }

  /**
   *
   * @param {String} msg
   */
  warnAsync(msg) {
    this.log.warn(msg);
  }
}

module.exports = { ExecuteConsole };
