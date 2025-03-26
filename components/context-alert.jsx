import { getNetlifyContext } from 'utils';



const noNetlifyContextAlert = `
For full functionality, either run this site locally via \`netlify dev\`
([see docs](https://docs.netlify.com/cli/local-development/")) or deploy it to Netlify.
`;

export function ContextAlert(props) {
    const { addedChecksFunction, className } = props;
    const ctx = getNetlifyContext();




