import {SpecQueryModelGroup} from 'compassql/build/src/model';


export function serialize(modelGroup: SpecQueryModelGroup) {
  return {
    name: modelGroup.name,
    items: modelGroup.items,
    groupBy: modelGroup.groupBy,
    orderGroupBy: modelGroup.orderGroupBy
  };
}
