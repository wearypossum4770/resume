/** @format */

export default class Timesheet {
  constructor({
    clock_id,
    status = "DRFT",
    start_date = new Date(),
    end_date = new Date(),
    date_created = new Date(),
    date_modified = new Date(),
  }) {
    this.clock_id = clock_id;
    this.status = status;
    this.startDate = new Date(start_date);
    this.endDate = new Date(end_date);
    this.dateCreated = new Date(date_created);
    this.dateModified = new Date(date_modified);
  }
}
class TimeEntry {
  constructor({ clock_id }) {
    this.employeeObject = clock_id;
  }
}
function clockIn({ clock_id, timesheet }) {
  return new Date();
}
function clockOut({ clock_id, timesheet }) {
  return new Date();
}
