import {login, logout} from '../../actions/auth'

test('should generate login action object', ()=>{
    const uid = '123se'
    const result = login(uid)
    expect(result).toEqual({
        type: 'LOGIN',
        uid
    })
})


test('should generate logout action object', ()=>{
    const result = logout()
    expect(result).toEqual({
        type: 'LOGOUT'
    })
})