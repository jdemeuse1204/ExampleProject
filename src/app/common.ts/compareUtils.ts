export function compareSoftwareVersions(version: string, compareVersion: string, versionsGreaterThanComparisonOnly: boolean = false) {
  const getVersions = (version: string) => {
    return version.split('.').map(w => +w)
  };
  const filterVersions = getVersions(compareVersion);
  const versions = getVersions(version);

  // make versions the same length so our comparison works
  while(filterVersions.length < versions.length) {
    filterVersions.push(0);
  }

  while(versions.length < filterVersions.length) {
    versions.push(0);
  }

  // compare versions, major, minor, revision
  for(let i = 0; i < filterVersions.length; i++) {
    if (versions[i] > filterVersions[i]) {
      return true;
    }

    
    if (versions[i] === filterVersions[i]) {
      continue;
    }

    if (versions[i] < filterVersions[i]) {
      return false;
    }
  }

  // per the example, version must be greater than what they entered, return false when they match
  // Made this optional for easy changing
  return versionsGreaterThanComparisonOnly;  
}
