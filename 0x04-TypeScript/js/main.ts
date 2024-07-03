///<reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';

import * as CRUD from './crud';
let row: RowElement = { firstName: Guillaume, lastName: Salva};

const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow); CRUD.deleteRow(newRowID);
