function autoLabels() {

  ///////////////////////
  // Set up labels
  ///////////////////////

  var realLabelThree = GmailApp.getUserLabelByName("Automation/archive_3_days");
  var realLabelTwo = GmailApp.getUserLabelByName("Automation/archive_2_days");
  var realLabelOne = GmailApp.getUserLabelByName("Automation/archive_1_day");
  var realLabelDelete = GmailApp.getUserLabelByName("Automation/delete_1_day");
  var newLabelArchived = GmailApp.getUserLabelByName("Automation/auto_archived");
  var newLabelDeleted = GmailApp.getUserLabelByName("Automation/auto_deleted");
  GmailApp.createLabel('temp/archive_2_days');
  GmailApp.createLabel('temp/archive_1_day');

  if (realLabelThree == null) {
    GmailApp.createLabel('Automation/archive_3_days');
  }
  if (realLabelTwo == null) {
    GmailApp.createLabel('Automation/archive_2_days');
  }
  if (realLabelOne == null) {
    GmailApp.createLabel('Automation/archive_1_day');
  }
  if (realLabelDelete == null) {
    GmailApp.createLabel('Automation/delete_1_day');
  }
  if (newLabelArchived == null) {
    GmailApp.createLabel('Automation/auto_archived');
  }
  if (newLabelDeleted == null) {
    GmailApp.createLabel('Automation/auto_deleted');
  }

  ///////////////////////
  // Add temporary labels
  ///////////////////////
  
  // 3 days to 2 days
  var realLabelThree = GmailApp.getUserLabelByName("Automation/archive_3_days");
  var tempLabelTwo = GmailApp.getUserLabelByName("temp/archive_2_days");
  var threads = realLabelThree.getThreads();
  tempLabelTwo.addToThreads(threads);
  realLabelThree.removeFromThreads(threads);

  // 2 days to 1 day
  var realLabelTwo = GmailApp.getUserLabelByName("Automation/archive_2_days");
  var tempLabelOne = GmailApp.getUserLabelByName("temp/archive_1_day");
  var threads = realLabelTwo.getThreads();
  tempLabelOne.addToThreads(threads);
  realLabelTwo.removeFromThreads(threads);
  
  ///////////////////////
  // auto archive
  ///////////////////////

  var realLabelOne = GmailApp.getUserLabelByName("Automation/archive_1_day");
  var newLabelArchived = GmailApp.getUserLabelByName("Automation/auto_archived");
  var threads = realLabelOne.getThreads();
  newLabelArchived.addToThreads(threads);
  realLabelOne.removeFromThreads(threads);
  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToArchive();
  }

  ///////////////////////
  // auto delete
  ///////////////////////

  var realLabelDelete = GmailApp.getUserLabelByName("Automation/delete_1_day");
  var newLabelDeleted = GmailApp.getUserLabelByName("Automation/auto_deleted");
  var threads = realLabelDelete.getThreads();
  newLabelDeleted.addToThreads(threads);
  realLabelDelete.removeFromThreads(threads);
  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToTrash();
  }
  
  ///////////////////////
  // Swap in real labels
  ///////////////////////
  
  // 3 days to 2 days
  var threads = tempLabelTwo.getThreads();
  realLabelTwo.addToThreads(threads);
  tempLabelTwo.removeFromThreads(threads);
  
  // 2 days to 1 day
  var threads = tempLabelOne.getThreads();
  realLabelOne.addToThreads(threads);
  tempLabelOne.removeFromThreads(threads);

  ///////////////////////
  // Delete temp labels
  ///////////////////////

  tempLabelTwo.deleteLabel();
  tempLabelOne.deleteLabel();
}