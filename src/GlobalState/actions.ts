export const ACTIONSLIST = {
  ADD_LIST_ITEM: 'add_list_item',
};

export interface Action {
  type: string;
  value: object;
}
export const actions = {
  ADD_LIST_ITEM: (value: Action) => {
    return {
      type: ACTIONSLIST.ADD_LIST_ITEM,
      value: value,
    };
  },
};
