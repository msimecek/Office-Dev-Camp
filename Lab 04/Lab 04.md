Lab 04 - Procházení Unified API
===

V tomto praktickém cvičení si vzykoušíme několik volání unifikovaného API Office 365 a ukážeme, jak ho jednoduše prozkoumávat vlastními silami.

1. Přejděte na https://graphexplorer2.azurewebsites.net.

	> **Poznámka:** Bývá vhodné otevřít stránky, na které se během vývoje přihlašujeme, v privátním režimu prohlížeče (např. InPrivate pro IE a Edge nebo Anonymní okno pro Firefox nebo Operu).

1. Klikněte vpravo na **Sign in**.
1. Přihlašte se administrátorským účtem Office 365.
1. Automaticky se předvyplnilo textové pole s URL požadavku.
1. Klikněte na **GET**.
1. Dostanete odpověď **Error: 400 - Bad Request** - tento endpoint totiž sám o sobě nic nedělá.
1. Zadejte `https://graph.microsoft.com/beta/me/` - vrátí se odpověď, konkrétně informace o vás.
1. Přidejte na konec *calendar*.
	
	`https://graph.microsoft.com/v1.0/me/calendar/`

1. Přidejte na konec *events*.

	`https://graph.microsoft.com/v1.0/me/calendar/events`
	
1. Nyní se podíváme na soubory. Změňte adresu tak, aby se ptala na OneDrive uživatele.

	`https://graph.microsoft.com/beta/me/drive`
	
1. A na jeho soubory.

	`https://graph.microsoft.com/beta/me/drive/root/children`
	
1. Případně se můžeme podívat do konkrétní složky.

	`https://graph.microsoft.com/beta/me/drive/special/documents/children`
	
1. Přečteme všechny e-maily.

	`https://graph.microsoft.com/beta/me/messages`
	
1. Nebo jenom prvních 5.

	`https://graph.microsoft.com/beta/me/messages?$top=5`
	
1. Seřadíme si je podle času přijetí.

	`https://graph.microsoft.com/beta/me/messages?$top=5&$orderBy=receivedDateTime`
	
	
A tak dále... Základním zdrojem informací pro práci s Unified API je dokumentace: http://dev.office.com/unifiedAPIs. Dokud je API ve fázi Beta, není zcela přesná, takže pomáhá hledat v konkrétních API (například OneDrive: https://dev.onedrive.com/).