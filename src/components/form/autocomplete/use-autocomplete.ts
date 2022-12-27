import { getPropByString } from "@utils/get-prop-by-string";
import { useFetch } from "@utils/react-query";
import React from "react";
import { GetInfinitePagesInterface } from "../../../types/get-infinite-pages.interface";

type UseAutocompleteProps = {
  loaderUrl:string,
	value:any,
  onChange:(event:any)=>void,
	accessor: Array<string> | string
}

export const useAutocomplete = <T>({loaderUrl,onChange,value,accessor}:UseAutocompleteProps) => {
	const [inputValue, setInputValue] = React.useState('');
	const [autoCompleteValue, setAutoCompleteValue] = React.useState()

	const { data, isFetching } = useFetch<GetInfinitePagesInterface<T>>(loaderUrl,{
		search:inputValue || undefined
	});
	const options = data?.results!.map(v=>({
		label: getPropByString(v,accessor)
		/* Will be fixed */
		id: v.id 
	}))
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const option = options?.find(v=>v?.id === value)	
		setAutoCompleteValue(option)
	}, [value])

	const getInputProps = () => ({
		open,
		inputValue,
		value:autoCompleteValue || null,
		options,
		loading:isFetching,
		onOpen(){
			setOpen(true)
		},
		onClose(){
			setOpen(false)
		},
		onInputChange(_, newInputValue:string){
			setInputValue(newInputValue);
		},
		onChange(_,acChangeValue:any){
			setAutoCompleteValue(acChangeValue)
			onChange(acChangeValue?.id)
		},

	})

	return {
		isFetching,
		options,
		getInputProps,
		setInputValue
	}
}