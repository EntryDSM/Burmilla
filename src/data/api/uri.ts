enum uri {
    signin = '/auth',
    total = '/statics',
    applicant = '/applicant',
    applicants = '/applicants?size=10&page=0',
    schedules = '/schedules',
    ticket_print = '/excel/admission-ticket/',
    applicants_print = '/excel/applicants',
    make_applicants = '/applicants/examcode',
    arrived_application = '/applicant/printed-arrived'
}

export default uri