// src/services/projectService.js
import axiosClient from './axiosClient';

const RESOURCE = '/projects';

export const getProjects = async () => {
  const res = await axiosClient.get(RESOURCE);
  return res.data;
};

export const getProjectById = async (id) => {
  const res = await axiosClient.get(`${RESOURCE}/${id}`);
  return res.data;
};

export const createProject = async (project) => {
  const res = await axiosClient.post(RESOURCE, project);
  return res.data;
};

export const updateProject = async (id, project) => {
  const res = await axiosClient.put(`${RESOURCE}/${id}`, project);
  return res.data;
};

export const deleteProject = async (id) => {
  await axiosClient.delete(`${RESOURCE}/${id}`);
  return true;
};
