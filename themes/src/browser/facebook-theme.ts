/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { Theme } from '@theia/core/lib/browser/theming';
import { MonacoThemeRegistry } from '@theia/monaco/lib/browser/textmate/monaco-theme-registry';

const FACEBOOK_CSS = require('../../src/browser/style/facebook.useable.css');
const FACEBOOK_JSON = MonacoThemeRegistry.SINGLETON.register(
    require('../../src/browser/data/facebook.color-theme.json'), {}, 'facebook', 'vs-dark').name!;

export class FacebookTheme {

    static readonly facebook: Theme = {
        id: 'facebook-theme',
        label: 'Facebook Theme',
        description: 'Facebook Dark Theme',
        editorTheme: FACEBOOK_JSON,
        activate() {
            FACEBOOK_CSS.use();
        },
        deactivate() {
            FACEBOOK_CSS.unuse();
        }
    }

    static readonly themes: Theme[] = [
        FacebookTheme.facebook,
    ]
}