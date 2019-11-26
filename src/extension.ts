// strictモードの宣言
// コード内のエラー判定が厳しくなり、あいまいなコードに制限がかかる
'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// VSCodeのモジュールをインポート。
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// 拡張機能を作成するときには、「activate」関数をexportする必要があります。
// ロード時に一度だけ呼ばれます。
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
    // コンソール出力
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
    // vscodeモジュールのcommands.registerCommandの呼び出し
    // commandは、「extension.sayHellow」で、実行時には、
    // 「（） => 」引数なしで呼び出され、「vscode.window.showInformationMessage('Hello World!');」が実行されます。
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
        // 情報タイプのメッセージを表示
        // コマンドが実行されるたびに、extension.sayHelloが呼ばれて、この関数のみ実行される
		vscode.window.showInformationMessage('Hello World!');
	});

    // 拡張機能が使用されなくなったときに、リソース開放を行うための、設定。
    // 今回は、registerCommandの指定をを開放する必要があるので、開放対象に追加する。
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
// 拡張機能が非アクティブ化されたときに、実行されます。
export function deactivate() {}
