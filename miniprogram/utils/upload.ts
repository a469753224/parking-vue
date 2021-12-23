import { ChooseImage } from "../types/utils";
import { RequestPromise } from '../types/http'

export default class Upload {

	chooseImage(config: ChooseImage): RequestPromise {
		return new Promise(resolve => {
			let { count = 1, sourceType = 'album' } = config
			wx.chooseImage({
				count,
				sourceType: [<any>sourceType],
				success: (result) => {
					if (result.errMsg === 'chooseImage:ok') {
						resolve({
							code: 200,
							data: result.tempFilePaths
						})
					}
				}
			})
		})
	}

	uploadFile(): RequestPromise {
		return new Promise(async _resolve => {
			const res = await this.chooseImage({})
			console.log(res); return;
			/*wx.uploadFile({
				filePath: 'filePath',
				name: 'name',
				url: 'url',
				formData: formData,
				header: header,
				timeout: 0,
				success: (result) => {
					resolve({ ...result })
				},
				fail: (res) => { },
				complete: (res) => { },
			})*/
		})
	}


}