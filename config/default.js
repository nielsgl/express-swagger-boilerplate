module.exports = {
	swagger: {
		fittingsDirs: [
			"api/fittings"
		],

		defaultPipe: null,

		swaggerControllerPipe: 'swagger_controllers',

		bagpipes: {
			'_router': {
				name: 'swagger_router',
				mockMode: false,
				mockControllersDirs: [
					'api/mocks'
				],
				controllersDirs: [
					'api/controllers'
				]
			},

			'_swagger_validate': {
				name: 'swagger_validator',
				validateResponse: true
			},

			swagger_controllers: [
				{
					onError: 'json_error_handler'
				},
				'cors',
				'swagger_params_parser',
				'swagger_security',
				'_swagger_validate',
				'express_compatibility',
				'_router'
			],

			swagger_raw: {
				name: 'swagger_raw'
			}
		}
	}
}
