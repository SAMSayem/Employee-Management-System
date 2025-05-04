function viewChanges(version) {
    alert("Showing changes for version: " + version);
  }
  
  function restoreVersion(version) {
    const confirmRestore = confirm("Are you sure you want to restore version " + version + "?");
  
    if (confirmRestore) {
      alert("Restored to version " + version);
    }
  }
  