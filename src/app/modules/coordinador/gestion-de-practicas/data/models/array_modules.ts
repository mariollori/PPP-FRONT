export class ItemsOfSettingGeneralComite {
  gestion_user: Array<{ position: number; title: string; image: string }> = [
    {
      position: 1,
      title: 'Configuración\npracticante',
      image: 'assets/svg/modules/comite/settings-practicante.svg',
    },
    {
      position: 2,
      title: 'Configuración\nsupervisor',
      image: 'assets/svg/modules/comite/settings-supervisor.svg',
    },
    {
      position: 3,
      title: 'Configuración\ncomité',
      image: 'assets/svg/modules/comite/settings-comite.svg',
    },
  ];
  gestion_plan: Array<{ position: number; title: string; image: string }> = [
    {
      position: 4,
      title: 'Crear un nuevo\nplan',
      image: 'assets/svg/modules/comite/create-new-plan.svg',
    },
    {
      position: 5,
      title: 'Lista de\nplanes',
      image: 'assets/svg/modules/comite/list-plans.svg',
    },
    {
      position: 6,
      title: 'Agregar items\nde evaluación',
      image: 'assets/svg/modules/comite/settings-comite.svg',
    },
  ];
}

export class BannersFirebase {
  name!: string;
  url!: string;
  peso!: string;
}

export class DocumementsFirebase {
  name!: string;
  urlDocument!: string;
  // typeDocument!: string;
  description!: string;
  status!: boolean;
  type!: string;
}
