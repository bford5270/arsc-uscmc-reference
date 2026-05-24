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
        'A public web reference for USMC Role 2 HSS personnel on the Austere Resuscitative Surgical Care (ARSC) framework and the Marine Corps Role 2 patient-flow construct.',
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
              items: [
                { label: 'SOPs Index', link: '/standards/sops/' },
                { label: 'MASCAL SOP', link: '/standards/sops/mascal/' },
                { label: 'STP Operations SOP', link: '/standards/sops/stp-ops/' },
                { label: 'FRSS Operations SOP', link: '/standards/sops/frss-ops/' },
                { label: 'Holding / PCC SOP', link: '/standards/sops/holding-pcc/' },
                { label: 'Blood Management SOP', link: '/standards/sops/blood-management/' },
                { label: 'Cold Chain SOP', link: '/standards/sops/cold-chain/' },
                { label: 'COC Operations SOP', link: '/standards/sops/coc-ops/' },
                { label: 'Triage Officer SOP (stub)', link: '/standards/sops/triage-officer/' },
                { label: 'Sterilization SOP (stub)', link: '/standards/sops/sterilization/' },
                { label: 'EVAC / Patient Movement SOP (stub)', link: '/standards/sops/evac-patient-movement/' },
                { label: 'Mortuary Affairs SOP (stub)', link: '/standards/sops/mortuary-affairs/' },
                { label: 'Narcotics Management SOP (stub)', link: '/standards/sops/narcotics/' },
                { label: 'CBRNE SOP (stub)', link: '/standards/sops/cbrne/' },
              ],
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
          label: 'Presentations',
          collapsed: true,
          items: [
            { label: 'All Presentations', link: '/presentations/' },
            { label: 'Austere Prep / R2RA', link: '/presentations/austere-prep/' },
            { label: 'Prepare to Receive', link: '/presentations/prepare-to-receive/' },
            { label: 'Triage', link: '/presentations/triage/' },
            { label: 'STP / DCR', link: '/presentations/stp-dcr/' },
            { label: 'FRSS / DCS', link: '/presentations/frss-dcs/' },
            { label: 'Holding (Silver 48)', link: '/presentations/holding/' },
            { label: 'Prolonged Holding (Zinc 48)', link: '/presentations/prolonged-holding/' },
            { label: 'EVAC / ERC', link: '/presentations/evac-erc/' },
            { label: 'Mortuary Affairs', link: '/presentations/mortuary-affairs/' },
            { label: 'OPMED Curriculum', link: '/presentations/opmed-curriculum/' },
          ],
        },
        {
          label: 'Training Tools',
          items: [{ label: 'START Triage Game', link: '/triage-game/' }],
        },
        {
          label: 'Resources',
          items: [{ label: 'Resource Library', link: '/library/' }],
        },
        {
          label: 'Project',
          items: [{ label: 'Changelog', link: '/changelog/' }],
        },
      ],
    }),
  ],
});
