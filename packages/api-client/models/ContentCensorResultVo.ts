/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Content security - report information vo
*/
export class ContentCensorResultVo {
    /**
    * Reported vika ID
    */
    'nodeId': string;
    /**
    * The name of the reported vika table
    */
    'nodeName': string;
    /**
    * The name of the reported vika table
    */
    'shareId': string;
    /**
    * Processing result: 0 not processed, 1 banned, 2 normal (unsealed)
    */
    'reportResult': number;
    /**
    * Times of being reported
    */
    'reportNum': number;
    /**
    * Creation time
    */
    'createdAt'?: Date;
    /**
    * Update time
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "shareId",
            "baseName": "shareId",
            "type": "string",
            "format": ""
        },
        {
            "name": "reportResult",
            "baseName": "reportResult",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "reportNum",
            "baseName": "reportNum",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ContentCensorResultVo.attributeTypeMap;
    }

    public constructor() {
    }
}
