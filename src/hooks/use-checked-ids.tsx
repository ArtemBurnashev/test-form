import { RowDataUpdatedEvent, RowSelectedEvent } from "ag-grid-community";
import React from "react";

export const useCheckedIds = () => {
	const [checkedIds, setCheckedIds] = React.useState<Set<number>>(new Set());

	const gridProps = {
		onRowSelected(event: any) {
			const node = event.node
			console.log(node)
			if(node.isSelected()){
				setCheckedIds(prev=>{
					prev.add(node.data?.id)
					return new Set(prev)
				})
			} else {
				setCheckedIds(prev=>{
					prev.delete(node.data?.id)
					return new Set(prev)
				})
			}
		},
		onRowDataUpdated(event:any) {
			event.api.forEachNode((node) =>{
				node.setSelected(checkedIds.has(node.data?.id))
			}
			);
		},
	}

	return {
		idList:Array.from(checkedIds),
		setCheckedIds,
		gridProps
	}
}