// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://usmc-arsc.org',
  integrations: [
    starlight({
      components: {
        Footer: './src/components/Footer.astro',
      },
      title: 'ARSC USMC Field Reference',
      description:
        'A public, web-based reference and onboarding resource for 1st Medical Battalion personnel that organizes the Austere Resuscitative Surgical Care (ARSC) framework around the Marine Corps Role 2 patient-flow construct.',
      logo: {
        alt: 'ARSC USMC Field Reference',
        replacesTitle: false,
      },
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/bford5270/arsc-uscmc-reference',
      },
      editLink: {
        baseUrl:
          'https://github.com/bford5270/arsc-uscmc-reference/edit/main/',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Home', link: '/' },
            { label: 'About', link: '/about/' },
          ],
        },
        {
          label: 'Patient flow nodes',
          items: [
            { label: 'Austere Prep / R2RA', link: '/nodes/austere-prep/' },
            {
              label: 'Prepare to Receive',
              link: '/nodes/prepare-to-receive/',
            },
            { label: 'Triage', link: '/nodes/triage/' },
            { label: 'STP / DCR', link: '/nodes/stp-dcr/' },
            { label: 'FRSS / DCS', link: '/nodes/frss-dcs/' },
            { label: 'Holding (Silver 48)', link: '/nodes/holding/' },
            {
              label: 'Prolonged Holding (Zinc 48)',
              link: '/nodes/prolonged-holding/',
            },
            { label: 'EVAC / ERC', link: '/nodes/evac-erc/' },
            { label: 'Mortuary Affairs', link: '/nodes/mortuary-affairs/' },
          ],
        },
        {
          label: 'Cross-cutting TLOs',
          items: [
            {
              label: 'Team Development & Dynamics',
              link: '/team-development/',
            },
            {
              label: 'Trauma System Integration',
              link: '/trauma-integration/',
            },
            {
              label: 'Clinical Operations in the Austere Environment',
              link: '/clinical-ops/',
            },
          ],
        },
        {
          label: 'Standards & Expectations',
          items: [
            { label: 'Overview', link: '/standards/' },
            {
              label: 'SOPs',
              collapsed: true,
              items: [{ label: 'SOPs Index', link: '/standards/sops/' }],
            },
            {
              label: 'Expectations',
              collapsed: true,
              items: [
                {
                  label: 'Expectations Index',
                  link: '/standards/expectations/',
                },
              ],
            },
            {
              label: 'Training & Qualifications',
              collapsed: true,
              items: [
                {
                  label: 'Training & Qualifications Index',
                  link: '/standards/training/',
                },
              ],
            },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'ELO Crosswalk', link: '/elo-crosswalk/' },
            { label: 'Doctrine', link: '/doctrine/' },
            { label: 'JTS CPGs', link: '/cpgs/' },
            { label: 'Contributing', link: '/contributing/' },
          ],
        },
        {
          label: 'Project',
          items: [{ label: 'Changelog', link: '/changelog/' }],
        },
      ],
    }),
  ],
});
