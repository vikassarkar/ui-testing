
//import {client} from "../test-mocks";

export default class WebApiClient {
    // private url;
    // private client;
    // constructor(url: string) {
    //     //Mocking Real Api"s works on open network
    //     //this.url = url+"/mock";
    //     this.url = url;
    //     this.client = client;
    // }
    // getTableData(apiName) {
    //     return this.client.get(`${this.url}/${apiName}`);
    // }
    // addNewTableData(apiName, payload?) {
    //     return this.client.post(`${this.url}/${apiName}`, payload || {});
    // }
    // updateTableData(apiName, payload?) {
    //     return this.client.patch(`${this.url}/${apiName}/${payload.id}`, payload || {});
    // }
    // replaceTableData(apiName, payload?) {
    //     return this.client.put(`${this.url}/${apiName}/${payload.id}`, payload || {});
    // }
    // deleteTableData(apiName, payload?) {
    //     return this.client.delete(`${this.url}/${apiName}/${payload.id}`,  payload || {});
    // }
};

/**JSON SERVER Tips */
/**getting data from server */
//get : return this.client.get(`${this.url}/${apiName}`);
//get filter: return this.client.get(`${this.url}/${apiName}?filterKey=filterValue`); //?userId=12&id=1
//get sort: return this.client.get(`${this.url}/${apiName}?_sort=sortValue&_order=orderingValue`); //?_sort=name&_order=AESC //DESC

/**Adding New entry */
//post: return this.client.get(`${this.url}/${apiName}`); //payload= {"name":"vikas"} id will be by default added by json server

/**updating existing complete object entry but needs to provide id at url "/1"*/
//put: return this.client.get(`${this.url}/${apiName}/id`); //id is id(unique key) value in object

/**updating existing  object single or multiple entry but needs to provide id at url "/2"*/
//patch:  return this.client.get(`${this.url}/${apiName}/id`); //id is id(unique key) value in object //payload= {"name":"sarkar"} it will update name key value in object with id

/**deleting existing complete object entry but needs to provide id at url "/1"*/
//delete: return this.client.get(`${this.url}/${apiName}/id`); //id is id(unique key) value in object