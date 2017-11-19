import {Repository} from "../models/repository.interface";
import {USER_LIST} from "./user.mocks";

const repositoryList: Repository[] = [
  {
    name: 'Ionic 3 Camera',
    description: 'This is a demo app for using a camera with ionic 3',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Vibration',
    description: 'This is a demo vibrations app',
    owner: USER_LIST[0]
  },
  {
    name: 'Python',
    description: 'This is a demo python app',
    owner: USER_LIST[1]
  },
  {
    name: 'API',
    description: 'This is a demo API app',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 heat sensor',
    description: 'This is a demo heat sensor app',
    owner: USER_LIST[1]
  },
];

export const REPOSITORY_LIST = repositoryList;
