$(document).ready(function() {
	$('#MaterialTableContainer').jtable({
		title : 'Lista de Materiales',
		actions : {
			listAction : 'listAction',
			createAction : 'createAction',
			updateAction : 'updateAction',
			deleteAction : 'deleteAction'
		},

		fields : {
			codigo : {
				title : 'Id material',
				width : '30%',
				key : true,
				list : true,
				edit : true,
				create : true
			},
			articulo : {
				title : 'Nombre material',
				width : '30%',
				edit : true
			},
			u_medida : {
				title : 'Unidad de medida',
				width : '30%',
				edit : true
			},
			marca : {
				title : 'Marca',
				width : '20%',
				edit : true
			}
		}
	});
	$('#MaterialTableContainer').jtable('load');
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


