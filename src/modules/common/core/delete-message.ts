export class DeleteMessage {
    static response(name: string) {
        return {
            message: `${name} foi eliminada`
        }
    }
}