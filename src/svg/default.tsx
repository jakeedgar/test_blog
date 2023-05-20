export type IconType = {
  width: string
  height: string
}

const DefaultImage = (props: IconType) => {
  const { width, height, ...args } = props
  return (
    <svg {...args} id='visual' viewBox='0 0 900 600' width={width} height={height} xmlns='http://www.w3.org/2000/svg' version='1.1'>
      <rect x='0' y='0' width={width} height={height} fill='#001220'></rect>
      <g fill='#705e3c'>
        <circle r='32' cx='273' cy='400'></circle>
        <circle r='24' cx='660' cy='264'></circle>
        <circle r='23' cx='489' cy='472'></circle>
        <circle r='27' cx='361' cy='133'></circle>
        <circle r='25' cx='172' cy='5'></circle>
        <circle r='27' cx='311' cy='527'></circle>
        <circle r='27' cx='443' cy='230'></circle>
        <circle r='29' cx='776' cy='35'></circle>
        <circle r='29' cx='564' cy='269'></circle>
        <circle r='27' cx='499' cy='378'></circle>
        <circle r='23' cx='128' cy='74'></circle>
        <circle r='25' cx='606' cy='129'></circle>
        <circle r='27' cx='657' cy='57'></circle>
        <circle r='27' cx='700' cy='4'></circle>
        <circle r='23' cx='655' cy='562'></circle>
        <circle r='25' cx='181' cy='190'></circle>
        <circle r='29' cx='60' cy='595'></circle>
        <circle r='23' cx='784' cy='536'></circle>
        <circle r='24' cx='98' cy='421'></circle>
        <circle r='26' cx='35' cy='150'></circle>
        <circle r='23' cx='115' cy='270'></circle>
        <circle r='27' cx='338' cy='213'></circle>
        <circle r='26' cx='63' cy='331'></circle>
        <circle r='25' cx='866' cy='89'></circle>
        <circle r='23' cx='860' cy='165'></circle>
        <circle r='27' cx='213' cy='557'></circle>
        <circle r='27' cx='775' cy='415'></circle>
        <circle r='23' cx='501' cy='286'></circle>
        <circle r='27' cx='403' cy='304'></circle>
        <circle r='30' cx='413' cy='62'></circle>
        <circle r='24' cx='886' cy='425'></circle>
        <circle r='30' cx='574' cy='498'></circle>
        <circle r='27' cx='348' cy='449'></circle>
        <circle r='27' cx='113' cy='512'></circle>
        <circle r='25' cx='351' cy='356'></circle>
        <circle r='25' cx='307' cy='279'></circle>
        <circle r='30' cx='214' cy='446'></circle>
        <circle r='24' cx='887' cy='314'></circle>
        <circle r='25' cx='777' cy='322'></circle>
        <circle r='30' cx='515' cy='77'></circle>
        <circle r='27' cx='631' cy='452'></circle>
        <circle r='27' cx='522' cy='579'></circle>
        <circle r='29' cx='861' cy='13'></circle>
        <circle r='28' cx='345' cy='21'></circle>
        <circle r='28' cx='53' cy='480'></circle>
        <circle r='24' cx='796' cy='127'></circle>
        <circle r='26' cx='847' cy='572'></circle>
        <circle r='29' cx='441' cy='128'></circle>
        <circle r='27' cx='587' cy='37'></circle>
        <circle r='28' cx='532' cy='188'></circle>
        <circle r='25' cx='203' cy='313'></circle>
        <circle r='25' cx='672' cy='363'></circle>
        <circle r='23' cx='481' cy='6'></circle>
        <circle r='24' cx='252' cy='213'></circle>
        <circle r='27' cx='268' cy='100'></circle>
        <circle r='24' cx='111' cy='178'></circle>
        <circle r='24' cx='664' cy='180'></circle>
        <circle r='29' cx='17' cy='22'></circle>
        <circle r='28' cx='596' cy='346'></circle>
        <circle r='24' cx='808' cy='216'></circle>
        <circle r='25' cx='830' cy='283'></circle>
        <circle r='25' cx='86' cy='24'></circle>
        <circle r='23' cx='828' cy='372'></circle>
        <circle r='25' cx='720' cy='107'></circle>
        <circle r='28' cx='722' cy='453'></circle>
        <circle r='26' cx='406' cy='563'></circle>
        <circle r='30' cx='247' cy='34'></circle>
        <circle r='27' cx='204' cy='124'></circle>
        <circle r='26' cx='4' cy='258'></circle>
        <circle r='28' cx='732' cy='238'></circle>
        <circle r='24' cx='877' cy='513'></circle>
        <circle r='30' cx='132' cy='349'></circle>
        <circle r='28' cx='436' cy='367'></circle>
        <circle r='28' cx='572' cy='424'></circle>
        <circle r='28' cx='897' cy='236'></circle>
        <circle r='24' cx='278' cy='595'></circle>
        <circle r='24' cx='737' cy='582'></circle>
        <circle r='24' cx='588' cy='598'></circle>
        <circle r='28' cx='13' cy='424'></circle>
        <circle r='27' cx='128' cy='597'></circle>
        <circle r='28' cx='419' cy='469'></circle>
        <circle r='23' cx='601' cy='206'></circle>
        <circle r='28' cx='277' cy='465'></circle>
        <circle r='25' cx='1' cy='93'></circle>
        <circle r='30' cx='709' cy='516'></circle>
        <circle r='25' cx='752' cy='176'></circle>
        <circle r='24' cx='190' cy='378'></circle>
        <circle r='27' cx='828' cy='454'></circle>
        <circle r='28' cx='19' cy='541'></circle>
        <circle r='30' cx='347' cy='594'></circle>
        <circle r='23' cx='300' cy='158'></circle>
        <circle r='26' cx='266' cy='329'></circle>
        <circle r='25' cx='66' cy='224'></circle>
      </g>
    </svg>
  )
}

export default DefaultImage
