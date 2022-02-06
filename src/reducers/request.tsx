import { IRequest } from "../components/RequestList";

const SET_TOGGLE = 'SET_TOGGLE' as const;
const SET_DATA = 'SET_DATA' as const;
const SET_REQUESTS = 'SET_REQUESTS' as const;
const SET_METHOD = 'SET_METHOD' as const;
const SET_MATERIAL = 'SET_MATERIAL' as const;

export const setToggle = (status: boolean) => ({ type: SET_TOGGLE, payload: status });
export const setData = (data: IRequest[]) => ({ type: SET_DATA, payload: data });
export const setRequests = (requests: IRequest[]) => ({ type: SET_REQUESTS, payload: requests });
export const setMethod = (method: string) => ({ type: SET_METHOD, payload: method });
export const setMaterial = (material: string) => ({ type: SET_MATERIAL, payload: material });

type RequestAction =
  | ReturnType<typeof setToggle>
  | ReturnType<typeof setData>
  | ReturnType<typeof setRequests>
  | ReturnType<typeof setMethod>
  | ReturnType<typeof setMaterial>

type RequestState = {
  toggled: boolean;
  data: IRequest[];
  requests: IRequest[];
  method: string,
  material: string,
};

const initialState = {
  toggled: false,
  data: [],
  requests: [],
  method: '',
  material: '',
};

export default function request(state: RequestState = initialState, action: RequestAction): RequestState {
  switch (action.type) {
    case SET_TOGGLE:
      return {
        ...state,
        toggled: action.payload
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case SET_REQUESTS:
      return {
        ...state,
        requests: action.payload
      };
    case SET_METHOD:
      return {
        ...state,
        method: action.payload
      };
    case SET_MATERIAL:
      return {
        ...state,
        material: action.payload
      };
    default:
      return state;
  }
}