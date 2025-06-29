// src/services/basicInfoService.ts
import axios from 'axios';
import { BasicInfo } from '../../../component/types/Inventory';

const API_BASE = 'http://localhost:8080/api/basic-info';

// GET: Fetch all basic info records
export const getAllBasicInfo = () =>
  axios.get<BasicInfo[]>(`${API_BASE}/all`);

// GET: Fetch a single record by ID
export const getBasicInfoById = (id: number) =>
  axios.get<BasicInfo>(`${API_BASE}/get/${id}`);

// POST: Create a new basic info record
export const createBasicInfo = (data: BasicInfo) =>
  axios.post<BasicInfo>(`${API_BASE}/create`, data);

// PUT: Update an existing record by ID
export const updateBasicInfo = (id: number, data: BasicInfo) =>
  axios.put<BasicInfo>(`${API_BASE}/update/${id}`, data);

// DELETE: Remove a record by ID
export const deleteBasicInfo = (id: number) =>
  axios.delete<void>(`${API_BASE}/delete/${id}`);
