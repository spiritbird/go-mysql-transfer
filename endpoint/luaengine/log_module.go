/*
 * Copyright 2021-2022 the original author(https://github.com/wj596)
 *
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * </p>
 */

package luaengine

import (
	"github.com/yuin/gopher-lua"

	"go-mysql-transfer/util/log"
)

func preloadLogModule(L *lua.LState) {
	L.PreloadModule("log", logModuleLoader)
}

func logModuleLoader(L *lua.LState) int {
	t := L.NewTable()
	L.SetFuncs(t, logApis)
	L.Push(t)
	return 1
}

var logApis = map[string]lua.LGFunction{
	"info":  logInfo,
	"error": logError,
}

func logInfo(L *lua.LState) int {
	msg := L.CheckString(1)
	log.Info(msg)
	return 0
}

func logError(L *lua.LState) int {
	msg := L.CheckString(1)
	log.Error(msg)
	return 0
}