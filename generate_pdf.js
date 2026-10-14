const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

(async () => {
    try {
        console.log('Reading HTML...');
        let html = fs.readFileSync('suwenzo_brochure.html', 'utf8');
        
        console.log('Encoding image...');
        const logoPath = path.resolve('public', 'suwenzo-logo-horizontal.png');
        if (fs.existsSync(logoPath)) {
            const logoBase64 = fs.readFileSync(logoPath, 'base64');
            const logoUri = `data:image/png;base64,${logoBase64}`;
            html = html.replaceAll('LOGO_SRC_PLACEHOLDER', logoUri);
        } else {
            console.log('Logo not found at', logoPath);
        }
        
        console.log('Encoding dashboard image...');
        const dashboardPath = 'C:\\Projects\\hims\\better.png';
        if (fs.existsSync(dashboardPath)) {
            const dashBase64 = fs.readFileSync(dashboardPath, 'base64');
            const dashUri = `data:image/png;base64,${dashBase64}`;
            html = html.replaceAll('DASHBOARD_SRC_PLACEHOLDER', dashUri);
        } else {
            console.log('Dashboard image not found at', dashboardPath);
        }
        
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
            headless: 'new'
        });
        
        console.log('Opening page...');
        const page = await browser.newPage();
        
        await page.setContent(html, { waitUntil: 'networkidle0' });
        
        console.log('Generating PDF...');
        await page.pdf({
            path: 'Suwenzo_Platform_Overview.pdf',
            printBackground: true,
            preferCSSPageSize: true
        });
        
        console.log('PDF Generated successfully!');
        await browser.close();
    } catch (e) {
        console.error('Error generating PDF:', e);
        process.exit(1);
    }
})();
