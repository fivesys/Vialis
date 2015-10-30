$(document).ready(function() {
	$('#StudentTableContainer').jtable({
		title : 'Lista de usuarios',
		actions : {
			listAction : 'listAction',
			createAction : 'createAction',
			updateAction : 'updateAction',
			deleteAction : 'deleteAction'
		},

		fields : {
			studentId : {
				title : 'Id del usuario',
				width : '30%',
				key : true,
				list : true,
				edit : true,
				create : true
			},
			name : {
				title : 'Nombre',
				width : '30%',
				edit : true
			},
			department : {
				title : 'Departmento',
				width : '30%',
				edit : true
			},
			emailId : {
				title : 'Email',
				width : '20%',
				edit : true
			}
		}
	});
	$('#StudentTableContainer').jtable('load');
});