/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'core-js';
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// import {Hook}
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  HookStateItem,
  HookStates,
} from './types/backendTypes';

const componentActionsRecord: HookStates = [];
/*
export type HookStates = Array<HookStateItem>;

export interface HookStateItem {
  state: any;
  component: any;
}

*/
let index = 0;

export default {
  saveNew: (state, component): number => {
    componentActionsRecord[index] = { state, component };
    index++;
    return index - 1;
  },
  getRecordByIndex: (inputIndex: number): HookStateItem => componentActionsRecord[inputIndex],
  getComponentByIndex: (inputIndex: number): any => (componentActionsRecord[inputIndex]
    ? componentActionsRecord[inputIndex].component
    : undefined),
};
