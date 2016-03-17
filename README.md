#Gmail Auto-Archive
Automatically archive and trash messages after a defined waiting period.

This Google Script runs periodically (e.g., once/day) to move messages toward the point of archiving or trashing by changing its labels.

###Examples
- A food delivery email is useful that day, but unnecessary after. A Gmail filter sets all new matchin emails to "archive_1_day". The next day, it is automatically archived.
- A newsletter is relevant for a couple days (in case I need more time to read it), but after that, I'm unlikely to read it. A Gmail filter sets all new emails to "archive_3_days". The next day, the label is changed to "archive_2_days", then "archive_1_day". On the third day, it is automatically archived.

### Quick Start
First, create the following labels:
- Automation/archive_3_days
- Automation/archive_2_days
- Automation/archive_1_day
- Automation/auto_archived
- Automation/delete_1_day
- Automation/auto_deleted

Second, create a new Google Script project [script.google.com], and overwrite the default contents of Code.gs with the code in this project. Then create a Trigger for this code by clicking the "clock" icon. To run once/day, create a timer that looks like this:

![Trigger Setup](http://dropshare-superstrong.s3.amazonaws.com/GdwEy2cNhGjdAg/Screen-Shot-2016-03-17-at-2.01.49-PM.png "Trigger Setup")

Save the project, then run it once (press the "play" icon) to prompt for authorization.

Third, create Gmail filters that will assign new messages to any of the "archive_x_day" or "delete_1_day" labels. From there, the script will take over.
