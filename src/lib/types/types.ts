export interface employee {
	id: string;
	employeeFirstName: string;
	employeeLastName: string;
	employeePreferredName: string;
	employeeEmailAddress: string;
	currentEmployer: employer[];
	employeeMilitaryBranch: string;
	employeeMilitaryRank: string;
	employeeMilitaryExperience: string;
	yearsOfMilitaryExperience: string;
	yearsWithEmployer: string;
	employeeEducationLevel: string;
	employeeWorkLocation: location[];
	employeeSoftware: software[];
	employeeTechnicalAreas: technicalArea[];
	employeeProjectAreas: projectArea[];
	__typename: string;
}

interface location {
	title: string;
	id: string;
	__typename: string;
}

interface title {
	title: string;
	id: string;
	__typename: string;
}

interface software {
	softwareTitle: title[];
	softwareProficiency: string;
}

interface technicalArea {
	id: string;
	technicalAreaTitle: title[];
	technicalAreaProficiency: string;
	__typename: string;
}

interface projectAreaType {
	title: string;
	id: string;
	__typename: string;
}

interface projectArea {
	id: string;
	projectAreaLocation: location[];
	projectAreaTitle: title[];
	projectAreaType: projectAreaType[];
	projectClients: string;
	yearsOfExperience: string;
	__typename: string;
}

interface employer {
	title: string;
	id: string;
}

