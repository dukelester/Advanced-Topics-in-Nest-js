import { Injectable, Scope } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';


@Injectable({scope: Scope.REQUEST})
export class UserService {
    constructor (private lazyModuleLoader: LazyModuleLoader){}
    getAll(){
        return 'This action returns all users';
    }
}
