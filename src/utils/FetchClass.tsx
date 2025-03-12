namespace FETCH {
    export type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

    export type FetchOptions = {
        body?: any
        abortSignalMs?: number
        cookie?: string
        formdataBody?: FormData
        authorization?: any
        credentials?: any
    }

    export type AbortObj = {
        signal?: AbortSignal
    }

    export type FetchResult<T> = [
        ErrorReturn | null,
        SuccessReturn<T> | null
    ]

    export type ErrorReturn = MixReturn & {
        serverMsg: string
    }

    export type SuccessReturn<T> = MixReturn & {
       json: T | null
    }

    export type MixReturn = {
        code: number
        defaultMsg: string
    }
    
    export type FetchErrorReturn = {
       code: number,
       msg: string
    }
}


class Fetches
{
    private static async getReturnedData<T>(res: Response): Promise<FETCH.FetchResult<T>> {
        let json: T | null

        try         { json = await res.json() }
        catch (err) { json = null }
    
        const returnObj: FETCH.MixReturn = {
            code:       res.status,
            defaultMsg: res.statusText,
        }
        
        if (!res.ok) {
            const serverMsg: string = (json as any)?.msg ?? 'Request failed'
            return [{...returnObj, serverMsg}, null]
        }

        return [null, {...returnObj, json}]
    }

    private static getFetchOptions(body?: any, formdataBody?: FormData, rest?: any): any[]
    {
        return [
            formdataBody ?? JSON.stringify(body),
            formdataBody ? {...rest} : {...rest, 'Content-Type': 'application/json'}
        ]
    }


    /**
        * @info Use when you want to do a regular request
        * @param url URL to fetch from
        * @param type HTTP method. GET, POST, PATCH, PUT, DELETE
        * @param options Optional options
        * @returns [error, data] array. Both can be null. `data` is an object { code: number, defaultMsg: string, json: T }. `error` is an object { code: number, defaultMsg: string, serverMsg: string }. Error's `defaultMsg` can be TimeoutError if the server didn't respond after abortSignalMs milliseconds
    */
    public static async http<T = any>(url: string, type: FETCH.RequestType, options?: FETCH.FetchOptions): Promise<FETCH.FetchResult<T>>
    {
        const {body, formdataBody, abortSignalMs, credentials, ...rest} = options ?? {}

        if (body && typeof body !== 'object') 
            throw `'body' is not an object. Got ${typeof body} instead`

        const [fetchBody, fetchHeaders] = this.getFetchOptions(body, formdataBody, rest),
              abortTimeout: number      = abortSignalMs ?? 15000,
              abort: FETCH.AbortObj     = {}


        if (abortSignalMs !== -1)
            abort.signal = AbortSignal.timeout(abortTimeout)

        try
        {
            const res: Response = await fetch(url, {
                method: type,
                headers: fetchHeaders,
                credentials,
                ...abort,
                body: fetchBody
            })
        
            return await this.getReturnedData(res)

        } 
        catch (err: any)
        {
            let serverMsg: string = 'Error from the fetch request'

            if (err.name === 'TimeoutError') 
                serverMsg = `Request expired after: ${abortTimeout / 1000} seconds`

            return [
                {
                    defaultMsg: err.name,
                    code: 500,
                    serverMsg
                },
                null
            ]
        }
    }
}


export default Fetches