export type Principal = {
	sub: string
	roles: readonly string[]
}

export type Resource = {
	type: string
	path?: string
	id?: string
	attributes?: Readonly<Record<string, unknown>>
}

export type Context = {
	ip?: string
	now?: Date
	[key: string]: unknown
}

export type DecisionRequest = {
	principal: Principal
	action: string
	resource: Resource
	context?: Context
}

export type Decision = { allow: true } | { allow: false; reason?: string }

export interface PolicyEngine {
	decide(request: DecisionRequest): Promise<Decision>
}
