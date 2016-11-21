/// <reference path='./typings/tsd.d.ts' />
/// <reference path='./typings/mendixplatformsdk/mendix-platform-sdk.d.ts' />

import {MendixSdkClient, Project, Revision, Branch, OnlineWorkingCopy} from 'mendixplatformsdk';
import {IModel, domainmodels, microflows, pages, projects, appservices, texts} from 'mendixmodelsdk';

import when = require('when');

const username = 'richard.ford51@example.com';
const apikey = '364fbe6d-c34d-4568-bb7c-1baa5ecdf9d1';

const client = new MendixSdkClient(username, apikey, null, null, 'https://sprintr.home.mendix.dev', 'https://model-api.mendix.dev');

client.platform().createNewApp(`NewApp-${Date.now() }`)
    .then(project => project.createWorkingCopy())
    .then(workingCopy => loadDomainModel(workingCopy))
    .then(workingCopy => {
        const dm = pickDomainModel(workingCopy);
        const domainModel = dm.load();

        let entity = new domainmodels.Entity();
        entity.name = `NewEntity-${Date.now() }`;
        entity.location = { x: 100, y: 100 };

        domainModel.entities.push(entity);

        return workingCopy;
    })
    .then(workingCopy => workingCopy.commit())
    .done(
        revision => console.log(`Successfully committed revision: ${revision.num() }. Done.`),
        error => {
            console.log('Something went wrong:');
            console.dir(error);
        });

function loadDomainModel(workingCopy: OnlineWorkingCopy): when.Promise<OnlineWorkingCopy> {
    const dm = pickDomainModel(workingCopy);

    return when.promise<OnlineWorkingCopy>((resolve, reject) => {
        dm.load(dm => resolve(workingCopy));
    })
}

function pickDomainModel(workingCopy: OnlineWorkingCopy): domainmodels.IDomainModel {
    return workingCopy.model().allDomainModels()
        .filter(dm => dm.qualifiedName === 'MyFirstModule')[0];
}
