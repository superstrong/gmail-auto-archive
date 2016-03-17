#Gmail Auto-Archive
Automatically archive and trash messages after a defined waiting period.

This Google Script runs periodically (e.g., once/day) to move messages toward the point of archiving or trashing by changing its labels.

###Examples
- A food deliver email is useful that day, but can be archived the next day. A Gmail filter sets all new emails to "archive_1_day". The next day, it is automatically archived.
- A newsletter is relevant for a couple days (in case I need more time to read it), but after that, it becomes a burden. A Gmail filter sets all new emails to "archive_3_days". After three days, it is automatically archived.

### Quick Start
To use this script, do three things.

First, create the following labels:
- Automation/archive_3_days
- Automation/archive_2_days
- Automation/archive_1_day
- Automation/auto_archived
- Automation/delete_1_day
- Automation/auto_deleted

Second, create a new Google Script project [script.google.com], and overwrite the default contents of Code.gs with the code in this project. Then create a Trigger for this code by clicking the clock icon. To run once/day, create a timer that looks like this:

[image]

Third, create Gmail filters that will assign new messages to any of the "archive_<x>_day" or "delete_1_day" labels. From there, the script will take over.