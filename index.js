import fetch from 'node-fetch';
import chalk from 'chalk';
import rlSync from 'readline-sync';

class TrueID {
  constructor() {}

  async freeFire() {
    console.info(chalk.green(`\nCheck Nickname User Free Fire`));
    const id = rlSync.question('Masukkan ID User Free Fire\t: ');
    let data;

    await fetch(`https://www.api-xyz.com/trueid/freefire/?id=${id}`, {})
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(` ${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async mobileLegends() {
    console.info(chalk.green(`\nCheck Nickname User Mobile Legends`));
    const id = rlSync.question('Masukkan ID User Mobile Legends\t\t: ');
    const zone = rlSync.question('Masukkan Zone User Mobile Legends\t: ');
    let data;

    await fetch(
      `https://www.api-xyz.com/trueid/mobilelegends/?id=${id}&zone=${zone}`,
      {}
    )
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID atau Zone Tidak Valid!`);
    }
  }

  async higgsDomino() {
    console.info(chalk.green(`\nCheck Nickname User Higgs Domino`));
    const id = rlSync.question('Masukkan ID User Higgs Domino\t: ');
    let data;

    await fetch(`https://www.api-xyz.com/trueid/higgsdomino/?id=${id}`, {})
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async callOfDuty() {
    console.info(chalk.green(`\nCheck Nickname User Call of Duty`));
    const id = rlSync.question('Masukkan ID User Call of Duty\t: ');
    let data;

    await fetch(`https://www.api-xyz.com/trueid/callofduty/?id=${id}`, {})
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async hago() {
    console.info(chalk.green(`\nCheck Nickname User Hago`));
    const id = rlSync.question('Masukkan ID User Hago\t: ');
    let data;

    await fetch(`https://www.api-xyz.com/trueid/hago/?id=${id}`, {})
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async sausageMan() {
    console.info(chalk.green(`\nCheck Nickname User Sausage Man`));
    const id = rlSync.question('Masukkan ID User Sausage Man\t: ');
    let data;

    await fetch(`https://www.api-xyz.com/trueid/sausageman/?id=${id}`, {})
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async bgmi() {
    console.info(chalk.green(`\nCheck Nickname User BGMI`));
    const id = rlSync.question('Masukkan ID User BGMI\t: ');
    let data;

    await fetch(`https://www.api-xyz.com/trueid/bgmi/?id=${id}`, {})
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async pointBlank() {
    console.info(chalk.green(`\nCheck Nickname User Point Blank`));
    const id = rlSync.question('Masukkan ID User Point Blank\t: ');
    let data;

    await fetch(`https://www.api-xyz.com/trueid/pointblank/?id=${id}`, {})
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async genshinImpact() {
    console.info(chalk.green(`\nCheck Nickname User Genshin Impact`));
    const id = rlSync.question('Masukkan ID User Genshin Impact\t: ');
    const server = rlSync.question('Masukkan Nama Server\t\t: ');
    let data;

    await fetch(
      `https://www.api-xyz.com/trueid/gensin/?id=${id}&server=${server}`,
      {}
    )
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async aov() {
    console.info(chalk.green(`\nCheck Nickname User AOV`));
    const id = rlSync.question('Masukkan ID User AOV\t: ');
    let data;

    await fetch(`https://www.api-xyz.com/trueid/aov/?id=${id}`, {})
      .then((res) => res.json())
      .then((result) => {
        data = result;
      });

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }

  async valorant() {
    console.info(chalk.green(`\nCheck Nickname User Valorant`));
    const id = rlSync.question('Masukkan ID User Valorant\t: ');
    let data;

    await fetch('https://api-xyz.com/trueid/valorant/', {
      method: 'POST',
      body: new URLSearchParams(`id=${id}`),
    })
      .then((res) => res.json())
      .then((result) => (data = result));

    if (data.result.status == 200) {
      console.info(`${chalk.green(`-->`)} Nickname\t: ${data.nickname}`);
    } else {
      console.info(`${chalk.red(`-->`)} User ID Tidak Valid!`);
    }
  }
}

console.info(
  `Tools Checker Nickname User Game\ncreated by ${chalk.bold(
    'rizkiiaprmn.'
  )}\n\nMenu :\n1. Check Nickname User FreeFire\n2. Check Nickname User Mobile Legends\n3. Check Nickname User Higgs Domino\n4. Check Nickname User Call Of Duty\n5. Check Nickname User Hago\n6. Check Nickname User Sausage Man\n7. Check Nickname User BGMI\n8. Check Nickname User Point Blank\n9. Check Nickname User Genshin Impact\n10. Check Nickname User AOV\n11. Check Nickname User Valorant`
);

const getInfo = new TrueID();
while (true) {
  const pilihan = rlSync.question('\nMasukkan Pilihan : ');

  switch (Number(pilihan)) {
    case 1:
      await getInfo.freeFire();
      break;
    case 2:
      await getInfo.mobileLegends();
      break;
    case 3:
      await getInfo.higgsDomino();
      break;
    case 4:
      await getInfo.callOfDuty();
      break;
    case 5:
      await getInfo.hago();
      break;
    case 6:
      await getInfo.sausageMan();
      break;
    case 7:
      await getInfo.bgmi();
      break;
    case 8:
      await getInfo.pointBlank();
      break;
    case 9:
      await getInfo.genshinImpact();
      break;
    case 10:
      await getInfo.aov();
      break;
    case 11:
      await getInfo.valorant();
      break;
    default:
      console.info(
        chalk.red('Pilihan tidak valid, silahkan pilih menu yang tersedia!')
      );
      process.exit();
  }

  const next = rlSync.question('\nIngin melakukan pengecekan lagi? (y/n) ');
  if (next === 'y') {
    continue;
  } else {
    console.info('Okeey, terimakasih telah menggunakan tools ini!');
    break;
  }
}
