// import { lazy, Suspense, SVGAttributes, useMemo } from 'react';

// /// STEP 1
// const ICONS = {
//   chevron: lazy(async () => ({
//     default: (await import('./system/chevron.svg')).ReactComponent,
//   })),
//   arrow: lazy(async () => ({
//     default: (await import('./system/arrow.svg')).ReactComponent,
//   })),
//   chat: lazy(async () => ({
//     default: (await import('./system/chat.svg')).ReactComponent,
//   })),
//   heart: lazy(async () => ({
//     default: (await import('./system/heart.svg')).ReactComponent,
//   })),
//   successCheck: lazy(async () => ({
//     default: (await import('./system/success-check.svg')).ReactComponent,
//   })),
//   closeX: lazy(async () => ({
//     default: (await import('./system/close-x.svg')).ReactComponent,
//   })),
//   clear: lazy(async () => ({
//     default: (await import('./system/clear.svg')).ReactComponent,
//   })),
//   info: lazy(async () => ({
//     default: (await import('./system/info.svg')).ReactComponent,
//   })),
//   upDownChevron: lazy(async () => ({
//     default: (await import('./system/up-down-chevron.svg')).ReactComponent,
//   })),
//   questionInCircle: lazy(async () => ({
//     default: (await import('./system/question-in-circle.svg')).ReactComponent,
//   })),
//   history: lazy(async () => ({
//     default: (await import('./system/history.svg')).ReactComponent,
//   })),
//   transfers: lazy(async () => ({
//     default: (await import('./exchange/transfers.svg')).ReactComponent,
//   })),
//   briefcase: lazy(async () => ({
//     default: (await import('./exchange/briefcase.svg')).ReactComponent,
//   })),
//   usd: lazy(async () => ({
//     default: (await import('./exchange/dollar.svg')).ReactComponent,
//   })),
//   rub: lazy(async () => ({
//     default: (await import('./exchange/rub.svg')).ReactComponent,
//   })),
//   eur: lazy(async () => ({
//     default: (await import('./exchange/eur.svg')).ReactComponent,
//   })),
//   aed: lazy(async () => ({
//     default: (await import('./exchange/eur.svg')).ReactComponent,
//   })),
//   wallet: lazy(async () => ({
//     default: (await import('./exchange/wallet.svg')).ReactComponent,
//   })),
//   canceled: lazy(async () => ({
//     default: (await import('./exchange/canceled.svg')).ReactComponent,
//   })),
//   completed: lazy(async () => ({
//     default: (await import('./exchange/completed.svg')).ReactComponent,
//   })),
//   expired: lazy(async () => ({
//     default: (await import('./exchange/expired.svg')).ReactComponent,
//   })),
// };

// // STEP FINISH
// export enum IconName {
//   chevron = 'chevron',
//   arrow = 'arrow',
//   chat = 'chat',
//   heart = 'heart',
//   successCheck = 'successCheck',
//   closeX = 'closeX',
//   transfers = 'transfers',
//   briefcase = 'briefcase',
//   clear = 'clear',
//   upDownChevron = 'upDownChevron',
//   usd = 'usd',
//   rub = 'rub',
//   eur = 'eur',
//   questionInCircle = 'questionInCircle',
//   info = 'info',
//   wallet = 'wallet',
//   history = 'history',
//   canceled = 'canceled',
//   completed = 'completed',
//   expired = 'expired',
// }

// interface Props extends SVGAttributes<SVGElement> {
//   name: IconName;
// }

// export const Icon = ({ name, ...rest }: Props) => {
//   const SvgIcon = useMemo(() => ICONS[name], [name]);
//   if (!SvgIcon) {
//     throw new Error(`Icon "${name}" not found.`);
//   }
//   return (
//     <Suspense fallback={<svg {...rest} />}>
//       <SvgIcon {...rest} />
//     </Suspense>
//   );
// };



// Usage example
// <Icon name={IconName.chevron} className="w-6 h-6" />
