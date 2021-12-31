// TODO: remove or plug in correctly
import { writable, derived } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);

/** Data transformation.**/
export const networkStatus = derived(apiData, ($apiData) => {
    console.log('dfgsdfg', $apiData.lastSyncedSlot);
      if ($apiData.lastSyncedSlot){
        return $apiData;
      }
     return [];
});