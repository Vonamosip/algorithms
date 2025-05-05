// Функция принимает массив meetups,
//     и возвращает суммарное количество человек, находящихся на активных митапах

// membersOnActiveMeetups(meetups); // 1500

// Пример:
//     const meetups = [
//         { name: 'JavaScript', isActive: true, members: 100 },
//         { name: 'Angular', isActive: true, members: 900 },
//         { name: 'Node', isActive: false, members: 600 },
//         { name: 'React', isActive: true, members: 500 },
//     ];
// membersOnActiveMeetups(meetups); // 1500

    const meetups = [
        { name: 'JavaScript', isActive: true, members: 100 },
        { name: 'Angular', isActive: true, members: 900 },
        { name: 'Node', isActive: false, members: 600 },
        { name: 'React', isActive: true, members: 500 },
    ];

function membersOnActiveMeetups(meetups:any[]): number {
    let result = 0;
    for (let i = 0; i < meetups.length; i++) {
        if (meetups[i].isActive) {
            result += meetups[i].members;
        }
    } 
    return result;
}

membersOnActiveMeetups(meetups);