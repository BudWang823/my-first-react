/**
 * 发布订阅模式
 * @type {{generateId(): string, subscribe(*, *): *, unSubscribe(*, *=): void, publish(*, *=): void, list: {}}}
 */
export function PublishSubscribe() {
	 class Bus {
		constructor() {
			this.list = []
		}
		 generateId() {
			return `${new Date().valueOf()}`
		}
		// 订阅事件
		subscribe(event, callback) {
			if (typeof callback !== 'function') {
				throw '"callback" 应为回调函数'
				return
			}
			const id = this.generateId()
			if (!this.list[event]) {
				this.list[event] = {}
			}
			this.list[event][id] = callback
			return id
		}

		// 取消订阅
		unSubscribe(event, id) {
			delete this.list[event][id]
			console.log(id, '取消订阅')
		}


		// 发布
		publish(event, obj) {
			Object.keys(this.list[event] || {}).forEach(item => {
				this.list[event] && this.list[event][item] && this.list[event][item](obj)
			})
		}
	}
	return new Bus()
}
