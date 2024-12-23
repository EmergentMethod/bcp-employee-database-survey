import { EmployeeQueryStore } from '$houdini';
import type { PageServerLoad } from './$houdini';

export const load: PageServerLoad = async (event) => {
	const employeeQuery = new EmployeeQueryStore();
	const { data } = await employeeQuery.fetch({
		event,
		variables: { id: ['68338'] }
	});

	console.log("test", data);

	return data;
};
