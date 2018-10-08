import { mockSoftwareData } from "../mock/software";
import { compareSoftwareVersions } from "../app/common.ts/compareUtils";

export function getAllSoftware(filterText:string) : Promise<ISoftware[]> {

  // typically I would do all filtering server side for this request,
  // otherwise you would have to return the full list of software data 
  // and filter it client side.  If the software list grows to thousands of items, 
  // this would not be as efficient as server filtering.  For the sake of this 
  // coding example I am filtering client side

  return new Promise((resolve, reject) => {
    try {
      const filteredSoftwareItems = mockSoftwareData.filter(w => compareSoftwareVersions(w.Version, filterText));

      resolve(filteredSoftwareItems);
    } catch (e) {
      reject(e);
    }
  });
}
