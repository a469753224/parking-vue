export interface NavigateToMiniProgram<T> {
    appId: string
    path: string
    extraData: T
}

export interface ExtraData {
    mch_id: string
    service_id:string
    out_request_no: string
    timestamp: string
    nonce_str: string
    sign_type: string
    sign: string
}

export interface PrePermissions {
    code: string
}